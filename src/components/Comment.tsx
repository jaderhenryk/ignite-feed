import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1
    });
  }

  return (
    <div className="flex mt-6 gap-4">
      <Avatar
        className="w-12 h-12 rounded-lg"
        hasBorder={false}
        src="https://github.com/jaderhenryk.png"
      />
      <div className="flex-1">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-center justify-between">
            <div>
              <strong className="block text-sm leading-relaxed">
                Jader Henryk
              </strong>
              <time
                className="block text-xs leading-relaxed text-gray-400"
                title='11 de Julho às 20:00h'
                dateTime='2022-07-11 20:00:30'
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              className="bg-transparent border-0 text-gray-400 cursor-pointer rounded-sm leading-[0] hover:text-red-500"
              type="button"
              onClick={handleDeleteComment}
              title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">
            {content}
          </p>
        </div>
        <footer className="mt-4">
          <button
            className="flex items-center bg-transparent border-0 text-gray-400 cursor-pointer rounded-sm hover:text-green-300"
            type="button"
            onClick={handleLikeComment}
          >
            <ThumbsUp className="mr-2" />
            Aplaudir{' '}
            <span className="py-0 px-1 before:content-['\2022']">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}