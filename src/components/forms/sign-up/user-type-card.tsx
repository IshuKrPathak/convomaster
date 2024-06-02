"use client"
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import React from 'react'
import {FieldValues,UseFormRegister
} from "react-hook-form"
type Props = {
    value:string
    title:string
    register:UseFormRegister<FieldValues>
    text:string
    userType:'owner' | 'student'
    setUserType:React.Dispatch<React.SetStateAction<'owner' | 'student'>>

}

const UserTypeCard = ({register,title,setUserType,text,userType,value}: Props) => {
  return (

    <Label htmlFor={value}>
        <Card className={cn('w-full cursor-pointer', userType == value && 'border-orange')}>


        </Card>

    </Label>
  )
}

export default UserTypeCard