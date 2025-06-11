# DeepFake Audio Detection Using CNN

A web application for detecting deepfake audio using Convolutional Neural Networks (CNN). This project provides both a machine learning model for audio analysis and a user-friendly web interface for interaction.

## Features

- **Deep Learning Model**: CNN-based architecture for audio analysis
- **Web Interface**: Modern, responsive design for easy interaction
- **Real-time Analysis**: Quick detection of synthetic audio
- **Detailed Reports**: Comprehensive analysis and visualization
- **User-friendly**: Intuitive interface with clear results

## Project Structure

```
deepfake-voice-detection/
├── details/                 # Detailed information pages
│   ├── images/             # Project images and diagrams
│   ├── model-architecture.html
│   ├── performance.html
│   ├── technical.html
│   ├── audio-processing.html
│   ├── project-flow.html
│   ├── user-interface.html
│   └── details.css
├── images/                  # Main project images
├── index.html              # Main webpage
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
└── README.md              # Project documentation
```

## Technologies Used

- **Frontend for Visiuals only**:
  - HTML5
  - CSS3 (with modern features like CSS Grid and Flexbox)
  - JavaScript (ES6+)
  - Font Awesome for icons

- **Backend**:
  - Python
  - TensorFlow/Keras
  - Librosa for audio processing
  - NumPy for numerical operations

## Model Architecture

The project uses a CNN-based model with the following specifications:
- Input Shape: (128, 109, 1)
- Convolutional Layers: 2 layers
- Pooling Layers: 2 layers
- Dense Layers: 128 units
- Output: 2 classes (softmax)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/deepfake-voice-detection.git
   cd deepfake-voice-detection
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the web server:
   ```bash
   python -m http.server 8000
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Usage

1. Open the web application in your browser
2. Upload an audio file using the interface
3. Wait for the analysis to complete
4. View the detailed results and metrics

## Performance

The model achieves the following performance metrics:
- Training Accuracy: 99.13%
- Validation Accuracy: 20.47%
- Processing Time: < 1 second per audio file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@MohitRao](https://twitter.com/@MOHITRao1361581) - mohitrao333034@gmail.com

Project Link: [https://halog3.github.io/deepfake_audio_detection_project/](https://halog3.github.io/deepfake_audio_detection_project/)

## Acknowledgments

- ASVspoof2019 dataset for training data
- TensorFlow and Keras communities
- All contributors and supporters of the project 
