import React, { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';

const PopoverMenu = (props) => {
    const { trigger, options, menuClassName = '', width = '64px', zIndex = '10', position = 'top-full right-0 mt-2.5', triggerClassName = '', triggerStyle = {} } = props;

    return (
        <Popover className='relative'>
            {({ open }) => (
                <>
                    <Popover.Button className={`${open ? 'text-gray-900 ring-2 ring-offset-0' : 'ring-0'} ${triggerClassName}`} style={triggerStyle}>
                        {trigger}
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        show={open}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'>
                        <Popover.Panel static className={`absolute ${position} ${menuClassName} bg-white rounded-md !shadow-xl ring-1 ring-black ring-opacity-10 divide-y divide-gray-200 overflow-hidden`} style={{ width, zIndex }}>
                            {({ close }) =>
                                options.map((opt, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            close();
                                        }}>
                                        {opt}
                                    </div>
                                ))
                            }
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default PopoverMenu;
