'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './ui/icons/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton key={id} text={`Sign in with ${name}3`} onClick={() => signIn(id)} size='big' />
      ))}
    </>
  );
}
