import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false
	};
	togglePlay = event => {
		this.setState({
			pause: !this.state.pause
		});
	};
	componentDidMount() {
		this.setState({ pause: !this.props.autoplay });
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		});
	};
	handleTimeUpdate = event => {
		// console.log(this.video.currentTime);
		this.setState({
			currentTime: this.video.currentTime
		});
	};
	handleProgressChange = event => {
		this.video.currentTime = event.target.value;
	};
	handleSeeking = event => {
		this.setState({ loading: true });
	};
	handleSeeked = event => {
		this.setState({ loading: false });
	};
	handleVolumeChange = event => {
		this.video.volume = event.target.value;
	};
	handleFullScreenClick = event => {
		if (document.mozFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
		} else if (this.player.mozRequestFullScreen) {
			this.player.mozRequestFullScreen();
		} else if (this.player.webkitRequestFullscreen) {
			this.player.webkitRequestFullscreen();
		}
	};
	setRef = element => {
		this.player = element;
	};
	render() {
		return (
			<VideoPlayerLayout setRef={this.setRef}>
				<Title title={this.props.title} />
				<Controls>
					<PlayPause
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<ProgressBar
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
					<Volumen handleVolumeChange={this.handleVolumeChange} />
					<FullScreen
						handleFullScreenClick={this.handleFullScreenClick}
					/>
				</Controls>
				<Spinner active={this.state.loading} />
				<Video
					src={this.props.src}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		);
	}
}

export default VideoPlayer;
