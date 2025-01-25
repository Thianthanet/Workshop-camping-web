
import FormInputs from '@/components/form/FormInputs'
import TextAreaInput from '@/components/form/TextAreaInput'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { campingSchema } from '@/utils/schemas'
import Buttons from '@/components/form/Buttons'
import CategoryInput from '@/components/form/CategoryInput'
import Mainmap from '@/components/map/Mainmap'


const Camping = () => {
    const { register, handleSubmit, formState, setValue } = useForm({ resolver: zodResolver(campingSchema) })
    const { errors, isSubmitting } = formState

    console.log(isSubmitting)

    const handleSubmitData = async (data) => {
        await new Promise((resolve) => setTimeout(resolve,3000))
        console.log(data)
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

                        <CategoryInput name="category" register={register} setValue={setValue} />
                    </div>

                    <Mainmap register={register} setValue={setValue} />

                    <Buttons text="create camping" isPending={isSubmitting} type="submit" />
                </form>
            </div>
        </section>
    )
}

export default Camping