import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Link from '../../Link';
import ProfileImage from '../../ProfileImage';

export default function (props) {
    const {
        block: { title, schema },
        website,
        profile
    } = props;

    const { section } = schema;

    const [filter, setFilter] = useState({ search: '', year: '' });

    const categories = new Set();

    const articleMarkup = profile.renderProfileCards(
        section,
        (item, i) => {
            const head = item.getHeadData();

            const { title, date, subtitle, handle } = head;

            return (
                <li key={i}>
                    <Link
                        to={handle || item.getId()}
                        className='cursor-pointer overflow-hidden rounded-md flex space-x-0 lg:space-x-6 border max-w-4xl relative !shadow hover:!shadow-lg'>
                        <div className='w-44 h-44 flex-shrink-0 overflow-hidden hidden lg:block'>
                            <ProfileImage profile={item}></ProfileImage>
                        </div>
                        <div className='flex flex-col space-y-1 pl-4 pr-8 py-5'>
                            <h2 className='font-bold text-lg lineClamp-2'>{title}</h2>
                            <p className='text-base lineClamp-2 text-gray-600'>{subtitle}</p>
                            <p className='text-sm text-gray-500'>{date}</p>
                        </div>
                    </Link>
                </li>
            );
        },
        (cards) => {
            return cards
                .filter((item) => {
                    const head = item.getHeadData();

                    const { date, title } = head;

                    const yearLabel = date.split('-')[0];

                    categories.add(yearLabel);

                    let { search, year } = filter;

                    let searchText = search.toLocaleLowerCase();
                    let yearText = year.toLocaleLowerCase();

                    if (searchText && !title.toLocaleLowerCase().includes(searchText)) return false;

                    if (yearText && !date.toLocaleLowerCase().includes(yearText)) return false;

                    return true;
                })
                .sort((a, b) => (a.getHeadData()?.date < b.getHeadData()?.date ? 1 : -1));
        }
    );

    return (
        <>
            <div className='w-full px-6 py-8 mx-auto lg:max-w-5xl lg:px-12 lg:py-12'>
                {title ? (
                    <h2 className='font-bold text-xl mb-6'>{website.localize(title)}</h2>
                ) : null}

                <div className='w-full flex py-8 mb-8 mx-auto flex-1 lg:max-w-6xl lg:py-12 lg:space-x-10'>
                    {/* <Sidebar
                        searchText={filter.search}
                        setSearchText={(val) => {
                            setFilter({
                                ...filter,
                                search: val
                            });
                        }}
                        categories={Array.from(categories)}
                        category={filter.year}
                        setCategory={(val) => {
                            setFilter({
                                ...filter,
                                year: val
                            });
                        }}
                        website={website}></Sidebar> */}
                    <ul className='flex flex-col space-y-6 lg:space-y-10 lg:py-12 lg:border-l lg:pl-12'>
                        {/* {articleMarkup} */}
                    </ul>
                </div>
            </div>
        </>
    );
}
