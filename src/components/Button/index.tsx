import { SVGProps } from 'react';
import { ButtonComponent } from './styled';
import { Task } from '../../contexts/TaskContexts';

interface ButtonProps {
  content: string;
  svg: SVGProps<SVGSVGElement>;
  colorButton: 'default' | 'delete';
  onAction?: (task?: Task) => void;
}

export function Button({ colorButton, content, svg, onAction }: ButtonProps) {
  return (
    <ButtonComponent colorButton={colorButton} onClick={() => onAction?.()}>
      <>
        {content}
        {svg}
      </>
    </ButtonComponent>
  );
}
