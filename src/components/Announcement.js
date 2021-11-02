import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./Announcement.css";

const Announcement = () => {
    return (
        <div className="announcement-wrapper">
            <div className="announcement-card col-sm-8 offset-sm-2">
                
                    <p>Thank you for visiting this page</p>
                    <p>Do check out the GitHub repo for this project to
                        find out more about the source code for this project.
                        You may find the link to the repo by clicking on the
                        GitHub icon on the right.</p>
                

                {/*
                <Card className="col-sm-8 offset-sm-2" bg="Dark">
                    <CardTitle>Thank you for visiting this page</CardTitle>
                    <CardText>Do check out the GitHub repo for this project to
                        find out more about the source code for this project.
                        You may find the link to the repo by clicking on the
                        GitHub icon on the right.</CardText>
                </Card>
                */}
                

            </div>
        </div>
    );
};

export default Announcement;
