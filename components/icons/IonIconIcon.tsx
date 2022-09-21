import React from 'react';

import { Ionicons } from '@expo/vector-icons'; 

type Props = {
    name: any,
    size: number, 
    color: string
}

const IonIconIcon: React.FC<Props> = ({name, size, color}) => {
  return (
    <Ionicons name={name} size={size} color={color}/>
  )
}

export default IonIconIcon;