import { View } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons'

type Props = {
  rating: number;
}

export function Rating({ rating }: Props) {
  const roundedRating = Math.min(Math.round(rating), 5)
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<Icon key={i} size={14} name="star" className="mr-2" style={{ color: '#eab308' }} />)
    } else {
      stars.push(<Icon key={i} name="star" className="mr-2" style={{ color: '#71717a' }} />)
    }
  }

  return (
    <View className='flex-row'>
      {stars}
    </View>
  );
};

export default Rating;