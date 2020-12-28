export default {
  data: {
    point: {x: 0, y: 0, title: undefined}
  },
  methods: {
    goTarget(x, y) {
      this.point.x = x
      this.point.y = y
      this.point.title = x + y + 'test'
      console.log(this.point.x, this.point.y)
    }
  }
}
