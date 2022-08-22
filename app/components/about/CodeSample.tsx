import {Prism} from '@mantine/prism'

type Props = {}
const demoCode = `
/**
 * parseAndWriteWax
 * @description Pulls values from {@Link WaxAction} and shapes data to conform to table requirements
 * @example
 * export async function parseAndWriteWax(data: WaxAction[]): Promise<WaxItemParsed[]> {
  const parsedArray = []
  data.forEach((item: WaxAction) => {
    if (item.action_trace.act.data !== null) {
      const parsedItem = {
        block_time: item.action_trace.block_time,
        chain: "WAX",
        block_num: item.action_trace.block_num,
        tx_id: item.action_trace.trx_id,
        tx_type: item.action_trace.act.name,
        asset_ids: item.action_trace.act.data.asset_ids,
        memo: item.action_trace.act.data.memo,
        from: item.action_trace.act.data.from,
        to: item.action_trace.act.data.to,
        value: "",
      };
      return parsedArray.push(parsedItem)
    }
 */
export async function parseAndWriteWax(data: WaxAction[]): Promise<WaxItemParsed[]> {
  const parsedArray = []
  data.forEach((item: WaxAction) => {
    if (item.action_trace.act.data !== null) {
      const parsedItem = {
        block_time: item.action_trace.block_time,
        chain: "WAX",
        block_num: item.action_trace.block_num,
        tx_id: item.action_trace.trx_id,
        tx_type: item.action_trace.act.name,
        asset_ids: item.action_trace.act.data.asset_ids,
        memo: item.action_trace.act.data.memo,
        from: item.action_trace.act.data.from,
        to: item.action_trace.act.data.to,
        value: "",
      };
      return parsedArray.push(parsedItem)
    }

  });
  const result = await writeWaxTxs(parsedArray).catch(err => {
    console.log(err)
  })
  return parsedArray;
}`
function CodeSample({}: Props) {
  return (
    <Prism language="tsx">
        {demoCode}
    </Prism>
  )
}

export default CodeSample