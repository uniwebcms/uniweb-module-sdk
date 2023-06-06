import Articles from './Articles';
import Article from './Article';
import { Route, Routes } from 'react-router-dom';
import * as React from 'react';

export default function (props) {
    const { page } = props;

    const route = page.getRoute();

    return (
        <Routes>
            <Route path={`${route}/:contentId`} element={<Article {...props} />} />
            <Route path={route} element={<Articles {...props}></Articles>}></Route>
        </Routes>
    );
}
