import { resizeFile } from "@/utils/resizerImage"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { uploadImage } from "@/api/uploadFile"
import { useAuth } from "@clerk/clerk-react"
import { RotateCw } from "lucide-react"
import { useState } from "react"


const FormUploadImage = ({ setValue }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { getToken } = useAuth()

    const handleOnChange = async (e) => {
        setIsLoading(true)
        const file = e.target.files[0]
        const token = await getToken()
        if (!file) return
        try {
            const resizedImage = await resizeFile(file)
            const res = await uploadImage(token, resizedImage)
            setValue("image", res.data.result)
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    return (
        <div>
            <Label>Upload Image</Label>
            <div className="flex items-center gap-2">
                <Input
                    type="file"
                    onChange={handleOnChange}
                />
                {
                    isLoading && <RotateCw className="animate-spin" />
                }

            </div>
        </div>
    )
}
export default FormUploadImage