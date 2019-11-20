import React from 'react';

import Silider from 'rc-slider';

import {
    Container,
    Current,
    Volume,
    Progress,
    Controls,
    Time,
    ProgessSlider,
} from './styles';

import Cover from '../../assets/images/cover.jpeg';

import VolumeIcon from '../../assets/images/volume.svg';

import ShuffleIcon from '../../assets/images/shuffle.svg';

import BackwardIcon from '../../assets/images/backward.svg';

import PlayIcon from '../../assets/images/play.svg';

// import PauseIcon from '../../assets/images/pause.svg';

import ForwardIcon from '../../assets/images/forward.svg';

import RepeatIcon from '../../assets/images/repeat.svg';

export default function Player() {
    return (
        <Container>
            <Current>
                <img src={Cover} alt="Cover" />

                <div>
                    <span>Time like these</span>
                    <small>THE WEEKND</small>
                </div>
            </Current>

            <Progress>
                <Controls>
                    <button type="button">
                        <img src={ShuffleIcon} alt="Shuffle" />
                    </button>

                    <button type="button">
                        <img src={BackwardIcon} alt="BackwardIcon" />
                    </button>

                    <button type="button">
                        <img src={PlayIcon} alt="PlayIcon" />
                    </button>

                    <button type="button">
                        <img src={ForwardIcon} alt="ForwardIcon" />
                    </button>

                    <button type="button">
                        <img src={RepeatIcon} alt="RepeatIcon" />
                    </button>

                    <button type="button">
                        <img src={ShuffleIcon} alt="Shuffle" />
                    </button>
                </Controls>

                <Time>
                    <span>1: 39</span>
                    <ProgessSlider>
                        <Silider
                            railStyle={{
                                background: '#404040',
                                borderRarius: 10,
                            }}
                            trackStyle={{ background: '#1ed760' }}
                            handleStyle={{ border: 0 }}
                        />
                    </ProgessSlider>
                    <span>4: 24</span>
                </Time>
            </Progress>

            <Volume>
                <img src={VolumeIcon} alt="Volume" />
                <Silider
                    railStyle={{
                        background: '#404040',
                        borderRarius: 10,
                    }}
                    trackStyle={{ background: '#fff' }}
                    handleStyle={{ display: 'none' }}
                    value={100}
                />
            </Volume>
        </Container>
    );
}
