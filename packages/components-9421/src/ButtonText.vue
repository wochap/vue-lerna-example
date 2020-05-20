<script>
export default {
  functional: true,
  render(h, context) {
    return (
      <button
        class={["ButtonText", context.data.class, context.data.staticClass]}
        style={[context.data.style, context.data.staticStyle]}
        type="button"
        {...{
          on: context.listeners,
          attrs: context.data.attrs
        }}
      >
        {context.children}
      </button>
    );
  }
};
</script>

<style lang="scss">
.ButtonText {
  background-color: transparent;
  color: #717171;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 18px;
  border-width: 0;

  &[disabled] {
    color: #9e9e9e;
    cursor: not-allowed;
  }
}
</style>
