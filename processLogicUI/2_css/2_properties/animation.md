### Animation

1. animation-name:

2. animaiton-duration:

3. animation-timing-function:

4. animation-delay:

5. animation-iteration-count: s, infinite

6. animation-direction: forwards, backwards, alternate cycles

   1. normal:
   2. reverse:
   3. alternate:
   4. alternate-reverse:

7. animation-fill-mode: before start, after end, or both

   1. none
   2. forwards
   3. backwards
   4. both

8. animation-play-state: paused, running

### Transform

### Transforms

1. translate(x, y): px,

   1. translateX();
   2. translateY();
   3. translateZ();

2. rotate(): deg,

   1. rotateX();
   2. rotateY();
   3. rotateZ();

3. scale(): 0.5, 1, 2...

   1. scaleX();
   2. scaleY();
   3. scaleZ();

4. skew(): deg

   1. skewX();
   2. skewY();
   3. skewZ();

5. matrix(): 6 parameters;
   1. matrix3d(): 16 value;

- transform-origin: x(left, center, right, length, %), y(top, bottom, center, lenght, %), z(length)
- transform-style: flat, preserve-3d

- perspective: length, none;
- perspective-origin:
- backface-visibility: visible, hidden

### Transition

### Transition

1. transition:
2. transtion-property: <name property>
3. transtion-duration: 0.2s;
4. transtion-timing-function:
   1. ease(default): chậm nhanh chậm
   2. linear: bằng nhau
   3. ease-in: nhanh dần
   4. ease-out: chậm dần
   5. ease-in-out: slow start and end
   6. cubic-bezier(n, n, n, n)

### Example

- Kết hợp với hover
- Kết hợp với transformation
