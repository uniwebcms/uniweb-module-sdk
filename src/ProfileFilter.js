import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HiFilter } from 'react-icons/hi';
import SearchBox from './SearchBox';

function Menu(props) {
    const { filterInfo, filters, setFilters, mode = 'menu', width = '100%', menuPlacement = 'bottom-left' } = props;

    if (!Object.keys(filterInfo).length) return null;

    const numberOfFilterApplied = Object.keys(filters)
        .map((key) => (filters[key] && key !== 'searchText' ? true : false))
        .filter(Boolean).length;

    const handleSelect = (key, value) => {
        setFilters({
            ...filters,
            [key]: value
        });
    };

    const position = {
        'bottom-left': 'top-full right-0 mt-2.5',
        'bottom-right': 'top-full left-0 mt-2.5'
    };

    if (mode === 'linear') {
        return (
            <div className='flex flex-wrap lg:gap-5 md:gap-3 gap-2' style={{ width }}>
                {Object.entries(filterInfo).map(([category, categoryData], index) => {
                    return (
                        <React.Fragment key={index}>
                            {Object.keys(categoryData).map((key) => {
                                const isActive = filters[category] === key;

                                return (
                                    <div
                                        key={key}
                                        className={`px-3 py-1 border rounded-lg cursor-pointer ${isActive ? 'text-white bg-blue-600 hover:bg-blue-500' : 'bg-gray-100 hover:bg-white text-gray-700 hover:text-gray-900'}`}
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
        const menu = Object.entries(filterInfo).map(([category, categoryData], index) => {
            return (
                <div key={index}>
                    <div className='px-2.5 py-1 sm:px-3 sm:py-1.5'>
                        <p className='text-sm font-semibold text-gray-900' title={category}>
                            {category}
                        </p>
                    </div>
                    {Object.entries(categoryData).map(([key, value]) => {
                        const isActive = filters[category] === key;

                        return (
                            <Popover.Button as='div' key={key}>
                                <div
                                    className={`flex justify-between px-2.5 py-1.5 sm:(px-3 py-2) md:(px-4 py-2) ${isActive ? 'bg-blue-200' : ''} text-sm hover:bg-gray-100 text-gray-700 hover:text-gray-900 cursor-pointer space-x-2`}
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
            <Popover className='relative w-fit'>
                {({ open }) => (
                    <>
                        <Popover.Button as='div'>
                            <div className={`h-9 w-9 p-1 relative hover:bg-gray-200 rounded-md ${open ? 'bg-gray-200' : ''}`}>
                                <HiFilter className='h-full w-full text-gray-400' aria-hidden='true' />
                                {numberOfFilterApplied > 0 ? <span className='-top-2 -right-2 absolute w-5 h-5 items-center text-white text-xs bg-blue-500 rounded-full justify-center flex'>{numberOfFilterApplied}</span> : null}
                            </div>
                        </Popover.Button>
                        <Transition
                            enter='transition duration-100 ease-out'
                            enterFrom='transform scale-95 opacity-0'
                            enterTo='transform scale-100 opacity-100'
                            leave='transition duration-75 ease-out'
                            leaveFrom='transform scale-100 opacity-100'
                            leaveTo='transform scale-95 opacity-0'>
                            <Popover.Panel className={`absolute bg-white rounded-md !shadow-xl ring-1 ring-black ring-opacity-10 w-48 ${position[menuPlacement]}`}>{menu}</Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        );
    }
}

export const Search = ({ filters, setFilters }) => {
    const { searchText = '' } = filters;

    const handleSearch = (val) => {
        setFilters({
            ...filters,
            searchText: val || ''
        });
    };

    return <SearchBox filters={{ searchText }} handleSearch={handleSearch} noMargin={true} />;
};

export default function ProfileFilter({ as: Component = 'div', className, children }) {
    return <Component className={className}>{children}</Component>;
}

ProfileFilter.Menu = Menu;
ProfileFilter.Search = Search;
