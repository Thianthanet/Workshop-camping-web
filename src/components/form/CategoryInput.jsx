import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '../ui/label'
import { categories } from '@/utils/categories'

const CategoryInput = ({ name, register, setValue }) => {

    return (
        <div className='mb-2'>
            <input hidden {...register(name)} />
            <Label className="capitalize">
                {name}
            </Label>
            <Select onValueChange={(value) => setValue(name, value)} required>
                <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item) => {
                            return <SelectItem value={item.label} key={item.label}>
                                <span className='flex gap-2 text-center items-center'>
                                    <item.icon />
                                    <p className='capitalize'>{item.label}</p>
                                </span>
                            </SelectItem>
                        })
                    }
                </SelectContent>
            </Select>

        </div>
    )
}

export default CategoryInput