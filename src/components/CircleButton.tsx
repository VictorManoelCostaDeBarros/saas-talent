import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign as Icon } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon: keyof typeof Icon.glyphMap
  ghost?: boolean
}

export function CircleButton({ icon, ghost = false,  ...rest }: Props) {
  return (
    <TouchableOpacity 
      className={`w-10 h-10 rounded-full items-center justify-center ${ghost ? 'bg-zinc-300' : 'bg-rose-400'}`} 
      {...rest}
    >
      <Icon 
        name={icon}
        color="#FFF"
        size={18}
      /> 
    </TouchableOpacity>
  )
}