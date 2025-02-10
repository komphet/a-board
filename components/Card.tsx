import React from "react";

type CardProps = {
  author: string;
  category: string;
  title: string;
  content: string;
  comments: number;
  image: string;
};

const Card: React.FC<CardProps> = ({
  author,
  category,
  title,
  content,
  comments,
  image,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-medium">{author}</p>
      </div>
      <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
        {category}
      </span>
      <h2 className="font-bold text-lg mt-3">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm line-clamp-2">{content}</p>
      <div className="mt-4 text-gray-500 text-sm flex items-center gap-1">
        💬 {comments} Comments
      </div>
    </div>
  );
};

export default Card;
