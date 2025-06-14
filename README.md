librosa is a popular Python library used for audio and music analysis. It provides tools to work with audio signals, especially for tasks like feature extraction, visualization, and preprocessing 
Audio Effects and Manipulations:

Time-stretching

Pitch shifting

Harmonic-percussive separation


Feature Extraction:

MFCC (Mel-Frequency Cepstral Coefficients)

Chroma Features

Spectral Centroid, Bandwidth, Contrast

Zero Crossing Rate

Common Use Cases:
Music genre classification

Speech recognition

Audio fingerprinting

Emotion detection from voice

Sound event detection
hu(y=y, sr=sr, n_mfcc=13)
Spectrograms:

STFT (Short-Time Fourier Transform)

Mel-scaled spectrogram

Constant-Q transform

Audio Effects and Manipulations:

Time-stretching

Pitch shifting

Harmonic-percussive separation



ReLU(x)=max(0,x)
Meaning:
If the input x is positive, ReLU outputs x.

If the input x is negative or zero, ReLU outputs 0.

Why use ReLU?
Simple and fast

Helps solve the vanishing gradient problem

Makes training deep networks more efficient



Softmax activation function : xi = exi/ sum of exj
 

 
✅ Meaning:
Converts raw scores (logits) into probabilities.

All outputs add up to 1.

The class with the highest probability is the prediction.


Adam (Adaptive Moment Estimation) is an optimization algorithm used to update network weights.

feature:
Adjusts learning rate for each parameter.

Uses moving averages of gradients and squared gradients.

ROC Curve (Receiver Operating Characteristic Curve)
 What it shows:
The trade-off between True Positive Rate (Sensitivity) and False Positive Rate at different thresholds.

Interpretation:
A perfect model: ROC curve reaches top-left corner.

AUC (Area Under Curve): Measures overall performance.

AUC = 1 → perfect

AUC = 0.5 → random guessing


 Precision-Recall (PR) Curve
What it shows:
The trade-off between Precision and Recall at different thresholds.

Interpretation:
Useful when classes are imbalanced (e.g., fraud detection, disease diagnosis).

A high area under PR curve = better performance.

Calibration Curve
 What it shows:
Whether predicted probabilities match the actual outcomes.

 Axis:
X-axis: Predicted probability

Y-axis: Actual probability (true fraction of positives)
A perfectly calibrated model = straight diagonal line (y = x).

If model predicts 80% chance of success, it should be right 80% of the time.



