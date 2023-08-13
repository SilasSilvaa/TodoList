import { ComponentProps, RefObject } from 'react';
import { ButtonComponent } from './styled';

type ButtonProps = ComponentProps<'button'> & {
  colorButton: 'default' | 'delete';
  ref?: RefObject<HTMLButtonElement>;
};

export function Button({ colorButton, ...props }: ButtonProps) {
  return <ButtonComponent colorButton={colorButton} {...props} />;
}
