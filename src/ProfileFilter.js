/**
 * Filter profile lists.
 * @module ProfileFilter
 */

import React, { cloneElement } from 'react';
import { Popover } from '@headlessui/react';
import { HiFilter } from 'react-icons/hi';
import { usePopper, Portal } from './PopoverMenu';
import SearchBox from './SearchBox';

function Menu(props) {
    const {
        filter: { filters, selection },
        setFilter,
        mode = 'menu',
        maxWidth = '100%',
        menuWidth = '196px'
    } = props;

    if (!Object.keys(filters).length) return null;

    const numberOfFilterApplied = Object.keys(selection)
        .map((key) => (selection[key] && key !== 'searchText' && key !== '_sort' ? true : false))
        .filter(Boolean).length;

    const handleSelect = (key, value) => {
        setFilter({
            ...selection,
            [key]: value
        });
    };

    if (mode === 'linear') {
        return (
            <div className='flex flex-wrap lg:gap-5 md:gap-3 gap-2' style={{ maxWidth }}>
                {Object.entries(filters).map(([category, categoryData], index) => {
                    return (
                        <React.Fragment key={index}>
                            {Object.keys(categoryData).map((key) => {
                                const isActive = selection[category] === key;

                                return (
                                    <div
                                        key={key}
                                        className={`px-3 py-1 border rounded-lg cursor-pointer ${
                                            isActive
                                                ? 'text-white bg-blue-600 hover:bg-blue-500'
                                                : 'bg-gray-100 hover:bg-white text-gray-700 hover:text-gray-900'
                                        }`}
                                        onClick={() => {
                                            handleSelect(category, isActive ? '' : key);
                                        }}>
                                        {key}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    } else {
        let [trigger, container] = usePopper({
            placement: 'bottom-end',
            modifiers: [
                { name: 'offset', options: { offset: [0, 10] } },
                {
                    name: 'zIndex',
                    enabled: true,
                    options: {
                        zIndex: 100
                    }
                }
            ]
        });

        const menu = Object.entries(filters).map(([category, categoryData], index) => {
            return (
                <div key={index}>
                    <div className='px-2.5 py-1 sm:px-3 sm:py-1.5'>
                        <p className='text-sm font-semibold text-gray-900' title={category}>
                            {category}
                        </p>
                    </div>
                    {Object.entries(categoryData).map(([key, value]) => {
                        const isActive = selection[category] === key;

                        return (
                            <Popover.Button as='div' key={key}>
                                <div
                                    className={`flex justify-between px-2.5 py-1.5 sm:(px-3 py-2) md:(px-4 py-2) ${
                                        isActive ? 'bg-blue-200' : ''
                                    } text-sm hover:bg-gray-100 text-gray-700 hover:text-gray-900 cursor-pointer space-x-2`}
                                    onClick={() => {
                                        handleSelect(category, isActive ? '' : key);
                                    }}>
                                    <span>{key}</span>
                                    <span>{value.length}</span>
                                </div>
                            </Popover.Button>
                        );
                    })}
                </div>
            );
        });

        return (
            <Popover className='relative'>
                {({ open }) => (
                    <>
                        <Popover.Button as='div' ref={trigger}>
                            <div
                                className={`h-9 w-9 p-1 relative hover:bg-gray-200 rounded-md ${
                                    open ? 'bg-gray-200' : ''
                                }`}>
                                <HiFilter
                                    className='h-full w-full text-gray-400'
                                    aria-hidden='true'
                                />
                                {numberOfFilterApplied > 0 ? (
                                    <span className='-top-2 -right-2 absolute w-5 h-5 items-center text-white text-xs bg-blue-500 rounded-full justify-center flex'>
                                        {numberOfFilterApplied}
                                    </span>
                                ) : null}
                            </div>
                        </Popover.Button>
                        <Portal>
                            {open ? (
                                <div ref={container} className='z-50'>
                                    <Popover.Panel
                                        static
                                        className={`bg-white rounded-md !shadow-xl ring-1 ring-black ring-opacity-10`}
                                        style={{ width: menuWidth }}>
                                        {menu}
                                    </Popover.Panel>
                                </div>
                            ) : null}
                        </Portal>
                    </>
                )}
            </Popover>
        );
    }
}

export const Search = (props) => {
    const {
        filter: { selection },
        setFilter
    } = props;

    const { searchText = '' } = selection;

    const handleSearch = (val) => {
        setFilter({
            ...selection,
            searchText: val || ''
        });
    };

    return <SearchBox filters={{ searchText }} handleSearch={handleSearch} />;
};

export default function ProfileFilter({
    as: Component = 'div',
    className = 'flex space-x-2.5 items-center',
    children,
    filter,
    setFilter
}) {
    if (children && !Array.isArray(children)) children = [children];

    return (
        <Component className={className}>
            {children.map((child, index) => cloneElement(child, { key: index, filter, setFilter }))}
        </Component>
    );
}

ProfileFilter.Menu = Menu;
ProfileFilter.Search = Search;
