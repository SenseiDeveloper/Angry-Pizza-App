import React from 'react';
import { render } from "@testing-library/react";
import {Pagination} from '../components/pagination';

describe('test components', () => {
    it('should className pagination component', () => {
        const {container} = render(
            <Pagination pizzas = {[]} handleChangeItem={'handleChangeItem'}/>
        );
        const div = container.querySelector("div");
        expect(div.classList.contains('pagination')).toEqual(true);
    });

    it('check div to null', () => {
        const {container} = render(
            <Pagination pizzas = {[]} handleChangeItem={'handleChangeItem'}/>
        );
        const div = container.querySelector("div");
        expect(div).not.toBeNull()
    });
});
