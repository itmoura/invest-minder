import {httpLocal} from './config'

export default {
  listAssets:() => {
    return httpLocal.get('/financial-assets');
  },
  myAssets:(id) => {
    return httpLocal.get('/user-assets/'+id);
  },
  buyAsset:(asset) => {
    return httpLocal.post('/user-assets/buy', {
      userId: asset.userId,
      userAssetId: asset.userAssetId,
      financialAssetId: asset.assetId,
      quantity: asset.quantity,
      price: asset.price
    });
  }
}
