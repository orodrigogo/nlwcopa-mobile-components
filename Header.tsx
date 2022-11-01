import { Text, HStack, Box } from 'native-base';
import { CaretLeft, Export } from 'phosphor-react-native';

import { ButtonIcon } from './ButtonIcon';

interface Props {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
}

export function Header({ title, showBackButton = false, showShareButton = false }: Props) {
  const EmptyBoxSpace = () => (<Box w={6} h={6} />);

  return (
    <HStack w="full" h={24} bgColor="gray.800" alignItems="flex-end" pb={5} px={5}>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} />
            : <EmptyBoxSpace />
        }

        <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>

        {
          showShareButton
            ?
            <ButtonIcon icon={Export} />
            :
            <EmptyBoxSpace />
        }
      </HStack>
    </HStack>
  );
}