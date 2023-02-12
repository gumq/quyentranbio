#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

precision highp float;
uniform float opacity;
uniform vec3 color;
uniform sampler2D map;
varying vec2 vUv;
uniform float time;
uniform vec2 resolution;

uniform vec3 topColor;
uniform vec3 bottomColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  vec3 sample = texture2D(map, vUv).rgb;
  float sigDist = median(sample.r, sample.g, sample.b) - 0.5;
  float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);

  vec3 newColor = mix(bottomColor, topColor, vUv.y);

  // gl_FragColor = vec4(color.xyz, alpha * opacity);
  gl_FragColor = vec4(newColor, alpha * opacity);
  
  if (gl_FragColor.a < 0.0001) discard;
}