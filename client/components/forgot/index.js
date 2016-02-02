Forgot = React.createClass({
	getInitialState: function(){
		return {
			email: '',
			confirmEmail: '',
			emailError: '',
			confirmEmailError: '',
			emailNotFound: ''
		};
	},
	validateEmail: function(event){
		var email = event.target.value;
		if(!email.includes('@')){
      this.setState({emailError: 'not a valid email'});
    }
    else{
      this.setState({emailError: ''});
    }
    this.setState({email: email});
	},
	validateConfirmEmail: function(event){
		var confirmEmail = event.target.value;
		if(this.state.email !== confirmEmail){
			this.setState({confirmEmailError: 'Emails do not match'});
		}
		else{
			this.setState({confirmEmailError:''});
		}
		this.setState({confirmEmail: confirmEmail});
	},
	sendRecoveryEmail: function(event){
		event.preventDefault();
		$.ajax({
			url:'/api/player/password/reset?email=' + this.state.email,
			dataType: 'json',
			type: 'GET',
			success: function(data){
				store.dispatch(navigateToPage('MAIN'));
			}.bind(this),
			error: function(err){
				this.setState({emailNotFound:'this email does not exist'})
			}.bind(this)
		})
	},
	render: function(){
		var hide = this.state.emailError || this.state.confirmEmailError ? 'disabled' : false;
		return (
			<div>
				<form onSubmit={this.sendRecoveryEmail}>
					<input type="text" value={this.state.email} onChange={this.validateEmail} placeholder="email"/>
					<br />
					<input type="text" value={this.state.confirmEmail} onChange={this.validateConfirmEmail} placeholder="confirm email"/>
					<br />
					<input type="submit" id="subButton" disabled={hide}/>
				</form>
				<div id="eError">{this.state.emailError}</div>
				<div id="eError">{this.state.confirmEmailError}</div>
				<div id="eError">{this.state.emailNotFound}</div>
			</div>)
	}
})