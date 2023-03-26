import React, { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { tw } from './theme';

const PopoverMenu = (props) => {
    const { trigger, options, menuClassName = '', width = '64px', zIndex = '10', position = 'top-full right-0 mt-2.5', triggerClassName = '', triggerStyle = {} } = props;

    return (
        <Popover className={tw`relative`}>
            {({ open }) => (
                <>
                    <Popover.Button className={tw`${open ? 'text-gray-900 ring-2 ring-offset-0' : 'ring-0'} ${triggerClassName}`} style={triggerStyle}>
                        {trigger}
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        show={open}
                        enter={tw`transition ease-out duration-200`}
                        enterFrom={tw`opacity-0 translate-y-1`}
                        enterTo={tw`opacity-100 translate-y-0`}
                        leave={tw`transition ease-in duration-150`}
                        leaveFrom={tw`opacity-100 translate-y-0`}
                        leaveTo={tw`opacity-0 translate-y-1`}>
                        <Popover.Panel static className={tw`absolute ${position} w-[${width}] z-[${zIndex}] ${menuClassName} bg-white rounded-md !shadow-xl ring-1 ring-black ring-opacity-10 divide-y divide-gray-200 overflow-hidden`}>
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
