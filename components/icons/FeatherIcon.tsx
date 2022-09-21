import React from 'react';
import { Feather } from '@expo/vector-icons'; 

type Props = {
    name: any,
    size: number, 
    color: string
}

const FeatherIcon: React.FC<Props> = ({name, size, color}) => {
  return (
    <Feather name={name} size={size} color={color}/>
  )
}

export default FeatherIcon;