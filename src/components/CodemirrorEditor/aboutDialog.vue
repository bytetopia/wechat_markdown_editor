<template>
  <el-dialog
    title="关于"
    class="about__dialog"
    :visible="value"
    @close="$emit('input', false)"
    width="30%"
    center
  >
    <div style="text-align: center">
      <h3>单机版微信公众号 Markdown 编辑器</h3>
    </div>
    <div style="text-align: center; margin-top: 10px">
      <p>本项目 fork 自 doocs/md</p>
      <br/>
      <hr/>
      <br/>
      <p>欢迎关注我的技术公众号</p>
      <img
        src="https://storage.dongxing.xin/shared/wx/qr_codemoments_banner.png"
        style="width: 80%; display: block; margin: 20px auto 10px"
      />
      <br/><br/>
      <p>访问网站 <a href="https://dongxing.xin" target="_blank">https://dongxing.xin</a></p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button
        type="primary"
        @click="onRedirect('https://github.com/bytetopia/wechat_markdown_editor')"
        plain
        >GitHub 仓库</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRedirect(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  min-width: 420px;
}
</style>
