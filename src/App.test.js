import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

describe('test for the header', () => {
  test('Test header renders with correct text', () => {
    render(<App />);
    const headerE1 = screen.getByRole("heading");
    expect(headerE1.textContent).toBe("Testing Playground");
  })
})

describe('test for the button', () => {
  test('button changes color when clicked', () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({backgroundColor: "blue"})
    expect(colorBtn.textContent).toBe("Change button color to green")
  })
})

describe('test for the checkbox', () => {
  test('Checkbox works to facilitate change of button color', () => {
    render (<App />)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")

    userEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()

    userEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })
})


describe('test if enabled text is working', () => {
  test('Enabled display is working', () => {
    render (<App />)
    const checkbox = screen.getByRole("checkbox")
    const paragraphE1 = screen.getByRole("paragraph")

    expect(paragraphE1.textContent).toBe("Button is enabled")

    userEvent.click(checkbox)
    expect(paragraphE1.textContent).toBe("Button is disabled")

    userEvent.click(checkbox)
    expect(paragraphE1.textContent).toBe("Button is enabled")
  })
})

