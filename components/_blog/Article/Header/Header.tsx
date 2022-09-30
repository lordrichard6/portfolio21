import React from 'react';

interface Props {
    readingTime: {
        text: string
    }
    title: string
    description: string
    date: string
    ogImage: {
        url: string
    }
}

const Header = ({ title, description, date, ogImage }: Props) => (
    <div className="">
        <p>Published on {date}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={ogImage.url} alt="Post image" lazy="loading" />
    </div>
)

export default Header;