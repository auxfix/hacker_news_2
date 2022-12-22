import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import {SuperButton} from '../lib';

const meta: ComponentMeta<typeof SuperButton> = {
    title: 'uikit/SuperButton',
    component: SuperButton,
};
export default meta;

export const Primary: ComponentStoryObj<typeof SuperButton> = {
};