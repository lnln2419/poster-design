/*
 * @Author: Jeremy Yu
 * @Date: 2024-03-18 21:00:00
 * @Description: Store方法export
 * @LastEditors: Jeremy Yu <https://github.com/JeremyYu-cn>
 * @LastEditTime: 2024-03-18 21:00:00
 */

import useBaseStore from "./base";
import useUserStore from "./base/user";
import useCanvasStore from "./design/canvas"
import useControlStore from './design/control'
import useHistoryStore from './design/history'
import useWidgetStore from './design/widget'
import useGroupStore from './design/group'
import useForceStore from './design/force'
import useAuthStore from './auth'
import { useTemplateStore } from './template'

export {
  useBaseStore,
  useUserStore,
  useCanvasStore,
  useControlStore,
  useHistoryStore,
  useWidgetStore,
  useGroupStore,
  useForceStore,
  useAuthStore,
  useTemplateStore,
}
