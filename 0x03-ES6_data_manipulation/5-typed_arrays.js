export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position < buffer.byteLength && position >= 0) {
    view.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  return view;
}
