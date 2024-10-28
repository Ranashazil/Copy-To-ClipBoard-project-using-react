import React from 'react';

class CopyClipboard extends React.Component {
  state = {
    text: '', // Stores the textarea content
    copied: false, // Handles copy confirmation message
    isfocused: false,
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount() {
    let she = document.getElementById('hey').innerText;
    document.getElementById('heyYou').value = she;
  }

  focused = () => {
    if (!this.state.isfocused) {
      this.setState({ text: '', isfocused: true });
    }
  };

  copyText = () => {
    const textarea = document.getElementById('heyYou');
    textarea.select();


    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ text: '', copied: false });
        }, 3000); // 3 seconds
      } else {
        alert('Unable to copy');
      }
    } catch (error) {
      alert('An error occurred during copying');
    }
  };

  justClear = () => {
    document.getElementById('yesyes').value = '';
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-indigo-600 p-8">
        <section className="bg-purple-400 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center space-y-6">
          <code id="hey" className="text-xl font-semibold text-indigo-700 hover:bg-indigo-700 hover:text-white rounded-lg p-2 transition duration-200">
            Write and copy something
          </code>
          <textarea
            className="w-full p-4 border bg-green-300 hover:bg-red-300 border-indigo-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-300 text-gray-700 outline-none transition duration-200"
            id="heyYou"
            onFocus={this.focused}
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Type something here to copy..."
          />

<button
            className={`py-2 px-6 rounded-lg transition duration-200 shadow-md ${
              this.state.text.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
            onClick={this.copyText}
            disabled={this.state.text.length === 0}
          >
            Copy
          </button>


          {this.state.copied && (
            <p className="text-teal-600  text-lg font-medium">Copied to clipboard!</p>
          )}

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Paste here to check:</h3>
          <input
            type="text"
            placeholder="Paste it here"
            id="yesyes"
            className="border border-indigo-300 bg-green-300 hover:bg-red-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-300 rounded-lg p-2 w-full outline-none transition duration-200"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 mt-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            onClick={this.justClear}
          >
            Clear
          </button>
        </section>
      </div>
    );
  }
}

export default CopyClipboard;
