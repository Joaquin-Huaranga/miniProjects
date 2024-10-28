import React from 'react';
import styled from "styled-components";
import {video} from "../../../public/video/index.js";

export const PresentationSection = () => {

    return (
        <Container>
            <div className="video-wrapper">
                <video
                    className="video"
                    poster={"nop"}
                    autoPlay
                    loop
                    muted
                    controls={false}
                >
                    <source src={video}/>
                </video>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .video-wrapper {
        width: 100vw;
        height: 100vh;

        .video {
            width: 100%;
            height: 100%;
        }
    }
`;