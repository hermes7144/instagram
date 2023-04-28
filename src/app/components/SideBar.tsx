import { User } from '@/model/user';
import Avatar from './ui/icons/Avatar';

type Props = {
  user: User;
};

export default function SideBar({ user: { name, image } }: Props) {
  return (
    <>
      <div className='flex items-center'>
        {image && <Avatar image={image} size='normal' />}
        <div className='ml-4'>
          <p className='text-lg text-neutral-500'>{name}</p>
        </div>
      </div>

      <p className='text-sm text-slate-500 mt-8'>About · Help · Press · API · Jobs · Privacy · Terms · Location · Language </p>
      <p className='font-bold text-sm mt-8 text-neutral-500'>@Copyright INSTANTGRAM from METAL</p>
    </>
  );
}
