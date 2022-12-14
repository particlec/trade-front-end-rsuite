import StockMarket from "@/pages/assessment/stockMarket/StockMarket";
import React from 'react';
import {Breadcrumb, Panel} from 'rsuite';

const Page = () => {
    return (
        <Panel
            header={
                <>
                    <h3 className="title">Calendar</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item>assessment</Breadcrumb.Item>
                        <Breadcrumb.Item active>stockMarket</Breadcrumb.Item>
                    </Breadcrumb>
                </>
            }
        >
            <StockMarket/>
        </Panel>
    );
};

export default Page;