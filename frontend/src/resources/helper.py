from PIL import Image, ImageSequence

# Load the original GIF
input_gif = "lightning2.gif"   # Path to the original GIF
output_gif = "cropped.gif"  # Path to save the cropped GIF

# Open the GIF
with Image.open(input_gif) as gif:
    frames = []
    crop_box = (0, 0, 470, 500)  # Define the cropping box (left, upper, right, lower)

    # Iterate through each frame in the GIF
    for frame in ImageSequence.Iterator(gif):
        cropped_frame = frame.crop(crop_box)  # Crop the frame
        frames.append(cropped_frame)

    # Save the cropped frames as a new GIF
    frames[0].save(
        output_gif,
        save_all=True,
        append_images=frames[1:],  # Include the remaining frames
        loop=gif.info.get("loop", 0),  # Preserve looping settings
        duration=gif.info.get("duration", 100)  # Preserve frame duration
    )

print("GIF cropped and saved as", output_gif)
