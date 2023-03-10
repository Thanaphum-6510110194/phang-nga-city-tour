import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import TripDetail from '../src/page/tripDetail';

describe('tripdetail', () => {
    it('Check text_1 in pagetripdetail', () =>{
        render(
            <MemoryRouter>
                <TripDetail/>
            </MemoryRouter>
        );
        expect(screen.getByText('สิ่งที่รวมในโปรแกรมทัวร์')).toBeInTheDocument();
    })
    it('Check text_2 in pagetripdetail', () =>{
        render(
            <MemoryRouter>
                <TripDetail/>
            </MemoryRouter>
        );
        expect(screen.getByText('รายละเอียดทริป')).toBeInTheDocument();
    })
    it('Check text_3 in pagetripdetail', () =>{
        render(
            <MemoryRouter>
                <TripDetail/>
            </MemoryRouter>
        );
        expect(screen.getByText('จองเลย!')).toBeInTheDocument();
    })
    it('Check text_4 in pagetripdetail', () =>{
        render(
            <MemoryRouter>
                <TripDetail/>
            </MemoryRouter>
        );
        expect(screen.getByText('แสดงความคิดเห็น')).toBeInTheDocument();
    })
    it('Check text_5 in pagetripdetail', () =>{
        render(
            <MemoryRouter>
                <TripDetail/>
            </MemoryRouter>
        );
        expect(screen.getByText('Direction Link :')).toBeInTheDocument();
    })
})
