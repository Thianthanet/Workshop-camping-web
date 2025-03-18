
import FormInputs from '@/components/form/FormInputs'
import TextAreaInput from '@/components/form/TextAreaInput'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { campingSchema } from '@/utils/schemas'
import Buttons from '@/components/form/Buttons'
import CategoryInput from '@/components/form/CategoryInput'
import Mainmap from '@/components/map/Mainmap'
import { createCamping } from '@/api/camping'

//clerk
import { useAuth } from '@clerk/clerk-react'
import FormUploadImage from '@/components/form/FormUploadImage'
import { createAlert } from '@/utils/createAlert'

const Camping = () => {
    const { register, handleSubmit, formState, setValue, reset } = useForm({ resolver: zodResolver(campingSchema) })
    const { errors, isSubmitting } = formState
    const { getToken, userId } = useAuth()
    console.log(isSubmitting)

    const handleSubmitData = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
        const token = await getToken()
        createCamping(token, data)
            .then((res) => {
                console.log(res.data)
                reset()
                createAlert("success", "Create Landmark Success!!")
            })
            .catch((err) => {
                console.log(err)
                createAlert("error", err.message)
            })
    }

    return (
        <section>
            <h1 className='capitalize text-2xl font-semibold mb-4'>create camping</h1>
            <div className='border p-8 rounded-lg'>
                <form onSubmit={handleSubmit(handleSubmitData)}>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        <FormInputs
                            register={register}
                            name="title"
                            type="text"
                            placeholder="Title"
                            errors={errors}
                        />

                        <FormInputs
                            register={register}
                            name="price"
                            type="number"
                            placeholder="Price"
                            errors={errors}
                        />

                        <TextAreaInput
                            register={register}
                            name="description"
                            type="text"
                            placeholder="Description"
                            errors={errors}
                        />

                        <div className='relative z-50'>
                            <CategoryInput name="category" register={register} setValue={setValue} />
                            <FormUploadImage setValue={setValue} />
                        </div>
                    </div>

                    <div className='relative z-10'>
                        <Mainmap register={register} setValue={setValue} />
                    </div>

                    <Buttons text="create camping" isPending={isSubmitting} type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Camping