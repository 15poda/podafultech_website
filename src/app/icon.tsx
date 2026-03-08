import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: '#5b36b8', // Hex equivalent of your primary theme color hsl(261 54% 47%)
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        P
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
