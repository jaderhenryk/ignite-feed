import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1533387520709-752d83de3630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=40" alt=""
      />
      <div className="flex flex-col items-center mt-[calc(0px - 1.5rem - 6px)]">
        <Avatar src="https://github.com/jaderhenryk.png" />
        <strong className="mt-4 text-gray-100 leading-relaxed">
          Jader Henryk
        </strong>
        <span className="text-xs text-gray-400 leading-relaxed">
          Web Developer
        </span>
      </div>
      <footer className="border-t-gray-600 border-solid pt-6 px-8 pb-8">
        <a
          className="flex items-center justify-center no-underline bg-transparent text-green-500 border-green-500 border-solid rounded-lg h-[50px] py-0 px-6 font-bold gap-2 transition-colors duration-200 hover:bg-green-500 hover:text-white"
          href="#"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}