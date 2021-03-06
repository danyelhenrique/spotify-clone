import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Silider from 'rc-slider';

import Sound from 'react-sound';

import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from '../../store/ducks/player';

import {
    Container,
    Current,
    Volume,
    Progress,
    Controls,
    Time,
    ProgessSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

import ShuffleIcon from '../../assets/images/shuffle.svg';

import BackwardIcon from '../../assets/images/backward.svg';

import PlayIcon from '../../assets/images/play.svg';

import PauseIcon from '../../assets/images/pause.svg';

import ForwardIcon from '../../assets/images/forward.svg';

import RepeatIcon from '../../assets/images/repeat.svg';

function Player({ player, play, pause, next, prev, ...props }) {
    const {
        playing,
        position,
        duration,
        handlePosition,
        setPosition,
        positionShow,
        progress,
        setVolume,
    } = props;

    return (
        <Container>
            {!!player.currentSong && (
                <Sound
                    url={player.currentSong.file}
                    playStatus={player.status}
                    onFinishedPlaying={next}
                    onPlaying={playing}
                    position={player.position}
                    volume={player.volume}
                />
            )}
            <Current>
                {!!player.currentSong && (
                    <>
                        <img
                            src={player.currentSong.thumbnail}
                            alt={player.currentSong.title}
                        />

                        <div>
                            <span>{player.currentSong.title}</span>
                            <small>{player.currentSong.author}</small>
                        </div>
                    </>
                )}
            </Current>

            <Progress>
                <Controls>
                    <button type="button">
                        <img src={ShuffleIcon} alt="Shuffle" />
                    </button>

                    <button type="button" onClick={prev}>
                        <img src={BackwardIcon} alt="BackwardIcon" />
                    </button>

                    {!!player.currentSong &&
                    player.status === Sound.status.PLAYING ? (
                        <button type="button" onClick={pause}>
                            <img src={PauseIcon} alt="PlayIcon" />
                        </button>
                    ) : (
                        <button type="button" onClick={play}>
                            <img src={PlayIcon} alt="PlayIcon" />
                        </button>
                    )}

                    <button type="button" onClick={next}>
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
                    <span>{positionShow || position}</span>
                    <ProgessSlider>
                        <Silider
                            railStyle={{
                                background: '#404040',
                                borderRarius: 10,
                            }}
                            trackStyle={{ background: '#1ed760' }}
                            handleStyle={{ border: 0 }}
                            max={1000}
                            onChange={value => handlePosition(value / 1000)}
                            onAfterChange={value => setPosition(value / 1000)}
                            value={progress}
                        />
                    </ProgessSlider>
                    <span>{duration}</span>
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
                    value={player.volume}
                    onChange={setVolume}
                />
            </Volume>
        </Container>
    );
}

function msToTime(duration) {
    if (!duration) return null;

    let seconds = parseInt((duration / 1000) % 60, 10);
    const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
    player: state.player,
    position: msToTime(state.player.position),
    duration: msToTime(state.player.duration),
    positionShow: msToTime(state.player.positionShow),
    progress:
        parseInt(
            (state.player.positionShow || state.player.position) *
                (1000 / state.player.duration),
            10
        ) || 0,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);

Player.propTypes = {
    player: PropTypes.shape({
        currentSong: PropTypes.shape({
            thumbnail: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            file: PropTypes.string,
            position: PropTypes.number,
        }),
        status: PropTypes.string,
    }).isRequired,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    playing: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    setPosition: PropTypes.func.isRequired,
    handlePosition: PropTypes.func.isRequired,
    positionShow: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    setVolume: PropTypes.func.isRequired,
};
