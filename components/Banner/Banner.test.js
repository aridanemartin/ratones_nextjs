import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import { prettyDOM } from '@testing-library/dom';
import Banner from './Banner';

test('Renders content', () => {
    const props = {
        text: 'lalala',
        buttonText: 'lololo',
        href: 'www.algo.com'
    }

    const component = render(
    <Banner 
    text={props.text} 
    buttonText={props.buttonText}
    link={props.href}    
    />)

    // component.getByText('lololo');

    expect(component.container).toHaveTextContent('lalala')
})

test('Click the button calls', () => {
    const props = {
        text: 'lalala',
        buttonText: 'lololo',
        href: 'www.algo.com'
    }

    const component = render(
    <Banner 
    text={props.text} 
    buttonText={props.buttonText}
    link={props.href}    
    />)

    expect(component.getByText('lololo').closest('a')).toHaveAttribute('href', '/www.algo.com')

})