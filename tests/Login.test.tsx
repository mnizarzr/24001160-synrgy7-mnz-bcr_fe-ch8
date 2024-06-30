import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/pages/Login.tsx';

describe('Login Component', () => {
    it('renders email and password inputs', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const emailInput = screen.getByPlaceholderText('Contoh: johndoe@gmail.com');
        const passwordInput = screen.getByPlaceholderText('6+ karakter');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    it('allows user to type into inputs', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const emailInput = screen.getByPlaceholderText('Contoh: johndoe@gmail.com') as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText('6+ karakter') as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    it('renders login button', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', { name: /login/i });
        expect(loginButton).toBeInTheDocument();
    });
});
