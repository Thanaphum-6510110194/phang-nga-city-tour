import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Payment from '../src/page/payment';

describe('LoginPage', () => {
    it('Check text_1 in pagepayment', () =>{
        render(
            <MemoryRouter>
                <Payment/>
            </MemoryRouter>
        );
        expect(screen.getByText('เลือกวิธีชำระเงิน')).toBeInTheDocument();
    })
    it('Check text_2 in pagepayment', () =>{
        render(
            <MemoryRouter>
                <Payment/>
            </MemoryRouter>
        );
        expect(screen.getByText('วันที่เดินทาง')).toBeInTheDocument();
    })
    it('Check text_3 in pagepayment', () =>{
        render(
            <MemoryRouter>
                <Payment/>
            </MemoryRouter>
        );
        expect(screen.getByText('จำนวนคน')).toBeInTheDocument();
    })
    it('Check text_4 in pagepayment', () =>{
        render(
            <MemoryRouter>
                <Payment/>
            </MemoryRouter>
        );
        expect(screen.getByText('************1038')).toBeInTheDocument();
    })
    it('Check text_5 in pagepayment', () =>{
        render(
            <MemoryRouter>
                <Payment/>
            </MemoryRouter>
        );
        expect(screen.getByText('หมายเหตุ: คุณที่มีเวลา 1 วันในการชำระค่าจองหลังจากนั้นจะถูกยกเลิกการจอง')).toBeInTheDocument();
    });
})

