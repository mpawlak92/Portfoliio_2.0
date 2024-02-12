import React, { useState } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  currnetState: boolean;
  onChanged: () => void;
  onIcon?: string;
  offIcon?: string;
  fontSize?: number;
  scale?: number;
}

const Switch: React.FC<ToggleProps> = ({ currnetState, onChanged, onIcon, offIcon, fontSize, scale = 1 }) => {
  const [isChecked, setChecked] = useState<boolean>(currnetState);

  const handleChange = () => {
    onChanged();
    setChecked(!isChecked);
  };
  return (
    <SwitchContainer $scale={scale}>
      <SwitchInput checked={isChecked} onChange={handleChange} />
      <Slider $isChecked={isChecked} $onIcon={onIcon} $offIcon={offIcon} $fontSize={fontSize} $scale={scale} />
    </SwitchContainer>
  );
};

const SwitchContainer = styled.label<{ $scale: number }>`
  position: relative;
  display: inline-block;
  width: ${(props) => 60 * props.$scale}px;
  min-height: ${(props) => 34 * props.$scale}px;
  background-color: transparent;
`;

const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Slider = styled.div<{
  $isChecked: boolean;
  $onIcon?: string;
  $offIcon?: string;
  $fontSize?: number;
  $scale: number;
}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$isChecked ? '#2196F3' : '#ccc')};
  transition: 0.4s;
  border-radius: ${(props) => 34 * props.$scale}px;

  &:before {
    content: '${(props) => (props.$isChecked ? props.$onIcon : props.$offIcon)}';
    position: absolute;
    transform: translateX(
        ${(props) => (props.$isChecked ? `calc(50% + ${19 * props.$scale}px)` : `calc(4px + ${props.$scale}px)`)}
      )
      translateY(-50%);
    bottom: 4px;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => 26 * props.$scale}px;
    width: ${(props) => 26 * props.$scale}px;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize * props.$scale + 'px' : '20px')};
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export default Switch;
