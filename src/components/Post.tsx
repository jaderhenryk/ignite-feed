import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

interface Author {
  avatarUrl: string;
  name: string;
  role: string
}

interface CommentContent {
  tag: string;
  content: string
}

interface Post {
  id: number;
  author: Author;
  content: CommentContent[],
  publishedAt: Date
}

interface PostProps {
  post: Post
}

export function Post({ post }: PostProps) {
  const { author } = post;
  const { content } = post;

  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [comments, setComments] = useState([
    'Muito bom Devon, parabéns!! 👏👏'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={author.avatarUrl} />
          <div>
            <strong className="block text-gray-100 leading-relaxed">
              {author.name}
            </strong>
            <span className="block text-sm text-gray-400 leading-relaxed">
              {author.role}
            </span>
          </div>
        </div>
        <time
          className="text-sm text-gray-400"
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="leading-relaxed text-gray-300 no-underline">
        {
          content.map((line) => {
            return (
              <p className="mt-4" key={line.content}>
                {line.tag === 'p' ? line.content : (
                  <a
                    href="#"
                    className="font-bold text-green-500 no-underline hover:text-gray-300">
                    {line.content}
                  </a>
                )}
              </p>
            )
          })
        }
      </div>
      <form
        onSubmit={handleCreateNewComment}
        className="commentForm w-full mt-6 pt-6 border-t-[1px] border-t-gray-100 group"
      >
        <strong className="leading-relaxed text-gray-100">
          Deixe seu comentário
        </strong>
        <textarea
          className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-normal mt-4"
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          value={newCommentText}
          required
        />
        <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
          <button
            className="py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer transition delay-100 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className="mt-8">
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  );
}